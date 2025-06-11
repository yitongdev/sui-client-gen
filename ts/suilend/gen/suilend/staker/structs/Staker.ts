import * as reified from "../../../_framework/reified.js";
import { Balance } from "../../../_dependencies/onchain/0x2/balance/structs/index.js";
import { SUI } from "../../../_dependencies/onchain/0x2/sui/structs/index.js";
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
import {
  AdminCap,
  LiquidStakingInfo,
} from "../../../springsui/liquid-staking/structs/index.js";
import { PKG_V8 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isStaker(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V8}::staker::Staker` + "<");
}

export interface StakerFields<T0 extends PhantomTypeArgument> {
  admin: ToField<AdminCap<T0>>;
  liquidStakingInfo: ToField<LiquidStakingInfo<T0>>;
  lstBalance: ToField<Balance<T0>>;
  suiBalance: ToField<Balance<ToPhantom<SUI>>>;
  liabilities: ToField<"u64">;
}

export type StakerReified<T0 extends PhantomTypeArgument> = Reified<
  Staker<T0>,
  StakerFields<T0>
>;

/**
 * Move struct: `Staker`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::staker`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class Staker<T0 extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V8}::staker::Staker`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = Staker.$typeName;
  readonly $fullTypeName: `${typeof PKG_V8}::staker::Staker<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = Staker.$isPhantom;

  readonly admin: ToField<AdminCap<T0>>;
  readonly liquidStakingInfo: ToField<LiquidStakingInfo<T0>>;
  readonly lstBalance: ToField<Balance<T0>>;
  readonly suiBalance: ToField<Balance<ToPhantom<SUI>>>;
  readonly liabilities: ToField<"u64">;

  private constructor(
    typeArgs: [PhantomToTypeStr<T0>],
    fields: StakerFields<T0>,
  ) {
    this.$fullTypeName = composeSuiType(
      Staker.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V8}::staker::Staker<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.admin = fields.admin;
    this.liquidStakingInfo = fields.liquidStakingInfo;
    this.lstBalance = fields.lstBalance;
    this.suiBalance = fields.suiBalance;
    this.liabilities = fields.liabilities;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): StakerReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: Staker.$typeName,
      fullTypeName: composeSuiType(
        Staker.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V8}::staker::Staker<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T0>>,
      ],
      isPhantom: Staker.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) =>
        Staker.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Staker.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => Staker.fromBcs(T0, data),
      bcs: Staker.bcs,
      fromJSONField: (field: any) => Staker.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => Staker.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Staker.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Staker.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        Staker.fetch(client, T0, id),
      new: (fields: StakerFields<ToPhantomTypeArgument<T0>>) => {
        return new Staker([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Staker.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<Staker<ToPhantomTypeArgument<T0>>>> {
    return phantom(Staker.reified(T0));
  }
  static get p() {
    return Staker.phantom;
  }

  static get bcs() {
    return bcs.struct("Staker", {
      admin: AdminCap.bcs,
      liquid_staking_info: LiquidStakingInfo.bcs,
      lst_balance: Balance.bcs,
      sui_balance: Balance.bcs,
      liabilities: bcs.u64(),
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): Staker<ToPhantomTypeArgument<T0>> {
    return Staker.reified(typeArg).new({
      admin: decodeFromFields(AdminCap.reified(typeArg), fields.admin),
      liquidStakingInfo: decodeFromFields(
        LiquidStakingInfo.reified(typeArg),
        fields.liquid_staking_info,
      ),
      lstBalance: decodeFromFields(
        Balance.reified(typeArg),
        fields.lst_balance,
      ),
      suiBalance: decodeFromFields(
        Balance.reified(reified.phantom(SUI.reified())),
        fields.sui_balance,
      ),
      liabilities: decodeFromFields("u64", fields.liabilities),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): Staker<ToPhantomTypeArgument<T0>> {
    if (!isStaker(item.type)) {
      throw new Error("not a Staker type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return Staker.reified(typeArg).new({
      admin: decodeFromFieldsWithTypes(
        AdminCap.reified(typeArg),
        item.fields.admin,
      ),
      liquidStakingInfo: decodeFromFieldsWithTypes(
        LiquidStakingInfo.reified(typeArg),
        item.fields.liquid_staking_info,
      ),
      lstBalance: decodeFromFieldsWithTypes(
        Balance.reified(typeArg),
        item.fields.lst_balance,
      ),
      suiBalance: decodeFromFieldsWithTypes(
        Balance.reified(reified.phantom(SUI.reified())),
        item.fields.sui_balance,
      ),
      liabilities: decodeFromFieldsWithTypes("u64", item.fields.liabilities),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): Staker<ToPhantomTypeArgument<T0>> {
    return Staker.fromFields(typeArg, Staker.bcs.parse(data));
  }

  toJSONField() {
    return {
      admin: this.admin.toJSONField(),
      liquidStakingInfo: this.liquidStakingInfo.toJSONField(),
      lstBalance: this.lstBalance.toJSONField(),
      suiBalance: this.suiBalance.toJSONField(),
      liabilities: this.liabilities.toString(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): Staker<ToPhantomTypeArgument<T0>> {
    return Staker.reified(typeArg).new({
      admin: decodeFromJSONField(AdminCap.reified(typeArg), field.admin),
      liquidStakingInfo: decodeFromJSONField(
        LiquidStakingInfo.reified(typeArg),
        field.liquidStakingInfo,
      ),
      lstBalance: decodeFromJSONField(
        Balance.reified(typeArg),
        field.lstBalance,
      ),
      suiBalance: decodeFromJSONField(
        Balance.reified(reified.phantom(SUI.reified())),
        field.suiBalance,
      ),
      liabilities: decodeFromJSONField("u64", field.liabilities),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): Staker<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== Staker.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Staker.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return Staker.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): Staker<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isStaker(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Staker object`,
      );
    }
    return Staker.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): Staker<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isStaker(data.bcs.type)) {
        throw new Error(`object at is not a Staker object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = gotTypeArgs[0] as string;
      const compressedGotType = compressSuiType(gotTypeArg);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (compressedGotType !== expectedTypeArg) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
        );
      }

      return Staker.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Staker.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<Staker<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Staker object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isStaker(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Staker object`);
    }

    return Staker.fromSuiObjectData(typeArg, res.data);
  }
}
