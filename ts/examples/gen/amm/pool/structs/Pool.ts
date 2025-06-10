import * as reified from "../../../_framework/reified.js";
import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  phantom,
  ToTypeStr as ToPhantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { Balance, Supply } from "../../../sui/balance/structs/index.js";
import { UID } from "../../../sui/object/structs/index.js";
import { PKG_V1 } from "../../constants.js";
import { LP as LP1 } from "./LP.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isPool(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::pool::Pool` + "<");
}

export interface PoolFields<
  A extends PhantomTypeArgument,
  B extends PhantomTypeArgument,
> {
  id: ToField<UID>;
  balanceA: ToField<Balance<A>>;
  balanceB: ToField<Balance<B>>;
  lpSupply: ToField<Supply<ToPhantom<LP1<A, B>>>>;
  lpFeeBps: ToField<"u64">;
  adminFeePct: ToField<"u64">;
  adminFeeBalance: ToField<Balance<ToPhantom<LP1<A, B>>>>;
}

export type PoolReified<
  A extends PhantomTypeArgument,
  B extends PhantomTypeArgument,
> = Reified<Pool<A, B>, PoolFields<A, B>>;

/**
 * Move struct: `Pool`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::pool`
 *
 * @typeParam A - Type parameter 0 (phantom)
 * @typeParam B - Type parameter 1 (phantom)
 */
export class Pool<A extends PhantomTypeArgument, B extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::pool::Pool`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [true, true] as const;

  readonly $typeName = Pool.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::pool::Pool<${PhantomToTypeStr<A>}, ${PhantomToTypeStr<B>}>`;
  readonly $typeArgs: [PhantomToTypeStr<A>, PhantomToTypeStr<B>];
  readonly $isPhantom = Pool.$isPhantom;

  readonly id: ToField<UID>;
  readonly balanceA: ToField<Balance<A>>;
  readonly balanceB: ToField<Balance<B>>;
  readonly lpSupply: ToField<Supply<ToPhantom<LP1<A, B>>>>;
  readonly lpFeeBps: ToField<"u64">;
  readonly adminFeePct: ToField<"u64">;
  readonly adminFeeBalance: ToField<Balance<ToPhantom<LP1<A, B>>>>;

  private constructor(
    typeArgs: [PhantomToTypeStr<A>, PhantomToTypeStr<B>],
    fields: PoolFields<A, B>,
  ) {
    this.$fullTypeName = composeSuiType(
      Pool.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::pool::Pool<${PhantomToTypeStr<A>}, ${PhantomToTypeStr<B>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.balanceA = fields.balanceA;
    this.balanceB = fields.balanceB;
    this.lpSupply = fields.lpSupply;
    this.lpFeeBps = fields.lpFeeBps;
    this.adminFeePct = fields.adminFeePct;
    this.adminFeeBalance = fields.adminFeeBalance;
  }

  static reified<
    A extends PhantomReified<PhantomTypeArgument>,
    B extends PhantomReified<PhantomTypeArgument>,
  >(
    A: A,
    B: B,
  ): PoolReified<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>> {
    return {
      typeName: Pool.$typeName,
      fullTypeName: composeSuiType(
        Pool.$typeName,
        ...[extractType(A), extractType(B)],
      ) as `${typeof PKG_V1}::pool::Pool<${PhantomToTypeStr<ToPhantomTypeArgument<A>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<B>>}>`,
      typeArgs: [extractType(A), extractType(B)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<A>>,
        PhantomToTypeStr<ToPhantomTypeArgument<B>>,
      ],
      isPhantom: Pool.$isPhantom,
      reifiedTypeArgs: [A, B],
      fromFields: (fields: Record<string, any>) =>
        Pool.fromFields([A, B], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Pool.fromFieldsWithTypes([A, B], item),
      fromBcs: (data: Uint8Array) => Pool.fromBcs([A, B], data),
      bcs: Pool.bcs,
      fromJSONField: (field: any) => Pool.fromJSONField([A, B], field),
      fromJSON: (json: Record<string, any>) => Pool.fromJSON([A, B], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Pool.fromSuiParsedData([A, B], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Pool.fromSuiObjectData([A, B], content),
      fetch: async (client: SuiClient, id: string) =>
        Pool.fetch(client, [A, B], id),
      new: (
        fields: PoolFields<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>>,
      ) => {
        return new Pool([extractType(A), extractType(B)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Pool.reified;
  }

  static phantom<
    A extends PhantomReified<PhantomTypeArgument>,
    B extends PhantomReified<PhantomTypeArgument>,
  >(
    A: A,
    B: B,
  ): PhantomReified<
    ToTypeStr<Pool<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>>>
  > {
    return phantom(Pool.reified(A, B));
  }
  static get p() {
    return Pool.phantom;
  }

  static get bcs() {
    return bcs.struct("Pool", {
      id: UID.bcs,
      balance_a: Balance.bcs,
      balance_b: Balance.bcs,
      lp_supply: Supply.bcs,
      lp_fee_bps: bcs.u64(),
      admin_fee_pct: bcs.u64(),
      admin_fee_balance: Balance.bcs,
    });
  }

  static fromFields<
    A extends PhantomReified<PhantomTypeArgument>,
    B extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [A, B],
    fields: Record<string, any>,
  ): Pool<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>> {
    return Pool.reified(typeArgs[0], typeArgs[1]).new({
      id: decodeFromFields(UID.reified(), fields.id),
      balanceA: decodeFromFields(
        Balance.reified(typeArgs[0]),
        fields.balance_a,
      ),
      balanceB: decodeFromFields(
        Balance.reified(typeArgs[1]),
        fields.balance_b,
      ),
      lpSupply: decodeFromFields(
        Supply.reified(reified.phantom(LP1.reified(typeArgs[0], typeArgs[1]))),
        fields.lp_supply,
      ),
      lpFeeBps: decodeFromFields("u64", fields.lp_fee_bps),
      adminFeePct: decodeFromFields("u64", fields.admin_fee_pct),
      adminFeeBalance: decodeFromFields(
        Balance.reified(reified.phantom(LP1.reified(typeArgs[0], typeArgs[1]))),
        fields.admin_fee_balance,
      ),
    });
  }

  static fromFieldsWithTypes<
    A extends PhantomReified<PhantomTypeArgument>,
    B extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [A, B],
    item: FieldsWithTypes,
  ): Pool<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>> {
    if (!isPool(item.type)) {
      throw new Error("not a Pool type");
    }
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return Pool.reified(typeArgs[0], typeArgs[1]).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      balanceA: decodeFromFieldsWithTypes(
        Balance.reified(typeArgs[0]),
        item.fields.balance_a,
      ),
      balanceB: decodeFromFieldsWithTypes(
        Balance.reified(typeArgs[1]),
        item.fields.balance_b,
      ),
      lpSupply: decodeFromFieldsWithTypes(
        Supply.reified(reified.phantom(LP1.reified(typeArgs[0], typeArgs[1]))),
        item.fields.lp_supply,
      ),
      lpFeeBps: decodeFromFieldsWithTypes("u64", item.fields.lp_fee_bps),
      adminFeePct: decodeFromFieldsWithTypes("u64", item.fields.admin_fee_pct),
      adminFeeBalance: decodeFromFieldsWithTypes(
        Balance.reified(reified.phantom(LP1.reified(typeArgs[0], typeArgs[1]))),
        item.fields.admin_fee_balance,
      ),
    });
  }

  static fromBcs<
    A extends PhantomReified<PhantomTypeArgument>,
    B extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [A, B],
    data: Uint8Array,
  ): Pool<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>> {
    return Pool.fromFields(typeArgs, Pool.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      balanceA: this.balanceA.toJSONField(),
      balanceB: this.balanceB.toJSONField(),
      lpSupply: this.lpSupply.toJSONField(),
      lpFeeBps: this.lpFeeBps.toString(),
      adminFeePct: this.adminFeePct.toString(),
      adminFeeBalance: this.adminFeeBalance.toJSONField(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<
    A extends PhantomReified<PhantomTypeArgument>,
    B extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [A, B],
    field: any,
  ): Pool<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>> {
    return Pool.reified(typeArgs[0], typeArgs[1]).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      balanceA: decodeFromJSONField(
        Balance.reified(typeArgs[0]),
        field.balanceA,
      ),
      balanceB: decodeFromJSONField(
        Balance.reified(typeArgs[1]),
        field.balanceB,
      ),
      lpSupply: decodeFromJSONField(
        Supply.reified(reified.phantom(LP1.reified(typeArgs[0], typeArgs[1]))),
        field.lpSupply,
      ),
      lpFeeBps: decodeFromJSONField("u64", field.lpFeeBps),
      adminFeePct: decodeFromJSONField("u64", field.adminFeePct),
      adminFeeBalance: decodeFromJSONField(
        Balance.reified(reified.phantom(LP1.reified(typeArgs[0], typeArgs[1]))),
        field.adminFeeBalance,
      ),
    });
  }

  static fromJSON<
    A extends PhantomReified<PhantomTypeArgument>,
    B extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [A, B],
    json: Record<string, any>,
  ): Pool<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>> {
    if (json.$typeName !== Pool.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Pool.$typeName, ...typeArgs.map(extractType)),
      json.$typeArgs,
      typeArgs,
    );

    return Pool.fromJSONField(typeArgs, json);
  }

  static fromSuiParsedData<
    A extends PhantomReified<PhantomTypeArgument>,
    B extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [A, B],
    content: SuiParsedData,
  ): Pool<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isPool(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Pool object`,
      );
    }
    return Pool.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    A extends PhantomReified<PhantomTypeArgument>,
    B extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [A, B],
    data: SuiObjectData,
  ): Pool<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isPool(data.bcs.type)) {
        throw new Error(`object at is not a Pool object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 2) {
        throw new Error(
          `type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`,
        );
      }
      for (let i = 0; i < 2; i++) {
        const gotTypeArg = compressSuiType(gotTypeArgs[i]);
        const expectedTypeArg = compressSuiType(extractType(typeArgs[i]));
        if (gotTypeArg !== expectedTypeArg) {
          throw new Error(
            `type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${gotTypeArg}'`,
          );
        }
      }

      return Pool.fromBcs(typeArgs, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Pool.fromSuiParsedData(typeArgs, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<
    A extends PhantomReified<PhantomTypeArgument>,
    B extends PhantomReified<PhantomTypeArgument>,
  >(
    client: SuiClient,
    typeArgs: [A, B],
    id: string,
  ): Promise<Pool<ToPhantomTypeArgument<A>, ToPhantomTypeArgument<B>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Pool object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isPool(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Pool object`);
    }

    return Pool.fromSuiObjectData(typeArgs, res.data);
  }
}
