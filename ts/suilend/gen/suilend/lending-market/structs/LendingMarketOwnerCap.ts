import {
  ID,
  UID,
} from "../../../_dependencies/onchain/0x2/object/structs/index.js";
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
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isLendingMarketOwnerCap(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(
    `${PKG_V1}::lending_market::LendingMarketOwnerCap` + "<",
  );
}

export interface LendingMarketOwnerCapFields<T0 extends PhantomTypeArgument> {
  id: ToField<UID>;
  lendingMarketId: ToField<ID>;
}

export type LendingMarketOwnerCapReified<T0 extends PhantomTypeArgument> =
  Reified<LendingMarketOwnerCap<T0>, LendingMarketOwnerCapFields<T0>>;

/**
 * Move struct: `LendingMarketOwnerCap`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class LendingMarketOwnerCap<T0 extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::lending_market::LendingMarketOwnerCap`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = LendingMarketOwnerCap.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::lending_market::LendingMarketOwnerCap<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = LendingMarketOwnerCap.$isPhantom;

  readonly id: ToField<UID>;
  readonly lendingMarketId: ToField<ID>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T0>],
    fields: LendingMarketOwnerCapFields<T0>,
  ) {
    this.$fullTypeName = composeSuiType(
      LendingMarketOwnerCap.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::lending_market::LendingMarketOwnerCap<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.lendingMarketId = fields.lendingMarketId;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): LendingMarketOwnerCapReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: LendingMarketOwnerCap.$typeName,
      fullTypeName: composeSuiType(
        LendingMarketOwnerCap.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V1}::lending_market::LendingMarketOwnerCap<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T0>>,
      ],
      isPhantom: LendingMarketOwnerCap.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) =>
        LendingMarketOwnerCap.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        LendingMarketOwnerCap.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => LendingMarketOwnerCap.fromBcs(T0, data),
      bcs: LendingMarketOwnerCap.bcs,
      fromJSONField: (field: any) =>
        LendingMarketOwnerCap.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) =>
        LendingMarketOwnerCap.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        LendingMarketOwnerCap.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        LendingMarketOwnerCap.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        LendingMarketOwnerCap.fetch(client, T0, id),
      new: (fields: LendingMarketOwnerCapFields<ToPhantomTypeArgument<T0>>) => {
        return new LendingMarketOwnerCap([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return LendingMarketOwnerCap.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<
    ToTypeStr<LendingMarketOwnerCap<ToPhantomTypeArgument<T0>>>
  > {
    return phantom(LendingMarketOwnerCap.reified(T0));
  }
  static get p() {
    return LendingMarketOwnerCap.phantom;
  }

  static get bcs() {
    return bcs.struct("LendingMarketOwnerCap", {
      id: UID.bcs,
      lending_market_id: ID.bcs,
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): LendingMarketOwnerCap<ToPhantomTypeArgument<T0>> {
    return LendingMarketOwnerCap.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      lendingMarketId: decodeFromFields(ID.reified(), fields.lending_market_id),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): LendingMarketOwnerCap<ToPhantomTypeArgument<T0>> {
    if (!isLendingMarketOwnerCap(item.type)) {
      throw new Error("not a LendingMarketOwnerCap type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return LendingMarketOwnerCap.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      lendingMarketId: decodeFromFieldsWithTypes(
        ID.reified(),
        item.fields.lending_market_id,
      ),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): LendingMarketOwnerCap<ToPhantomTypeArgument<T0>> {
    return LendingMarketOwnerCap.fromFields(
      typeArg,
      LendingMarketOwnerCap.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      id: this.id,
      lendingMarketId: this.lendingMarketId,
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
  ): LendingMarketOwnerCap<ToPhantomTypeArgument<T0>> {
    return LendingMarketOwnerCap.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      lendingMarketId: decodeFromJSONField(ID.reified(), field.lendingMarketId),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): LendingMarketOwnerCap<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== LendingMarketOwnerCap.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(LendingMarketOwnerCap.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return LendingMarketOwnerCap.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): LendingMarketOwnerCap<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isLendingMarketOwnerCap(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a LendingMarketOwnerCap object`,
      );
    }
    return LendingMarketOwnerCap.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): LendingMarketOwnerCap<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isLendingMarketOwnerCap(data.bcs.type)
      ) {
        throw new Error(`object at is not a LendingMarketOwnerCap object`);
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

      return LendingMarketOwnerCap.fromBcs(
        typeArg,
        fromBase64(data.bcs.bcsBytes),
      );
    }
    if (data.content) {
      return LendingMarketOwnerCap.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<LendingMarketOwnerCap<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching LendingMarketOwnerCap object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isLendingMarketOwnerCap(res.data.bcs.type)
    ) {
      throw new Error(
        `object at id ${id} is not a LendingMarketOwnerCap object`,
      );
    }

    return LendingMarketOwnerCap.fromSuiObjectData(typeArg, res.data);
  }
}
