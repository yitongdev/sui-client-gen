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
  fieldToJSON,
  phantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { String as String1 } from "../../../move-stdlib-chain/ascii/structs/index.js";
import { Option } from "../../../move-stdlib-chain/option/structs/index.js";
import { String } from "../../../move-stdlib-chain/string/structs/index.js";
import { PKG_V31 } from "../../constants.js";
import { UID } from "../../object/structs/index.js";
import { Url } from "../../url/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isCoinMetadata(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::coin::CoinMetadata` + "<");
}

export interface CoinMetadataFields<T0 extends PhantomTypeArgument> {
  id: ToField<UID>;
  decimals: ToField<"u8">;
  name: ToField<String>;
  symbol: ToField<String1>;
  description: ToField<String>;
  iconUrl: ToField<Option<Url>>;
}

export type CoinMetadataReified<T0 extends PhantomTypeArgument> = Reified<
  CoinMetadata<T0>,
  CoinMetadataFields<T0>
>;

/**
 * Move struct: `CoinMetadata`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class CoinMetadata<T0 extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::coin::CoinMetadata`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = CoinMetadata.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::coin::CoinMetadata<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = CoinMetadata.$isPhantom;

  readonly id: ToField<UID>;
  readonly decimals: ToField<"u8">;
  readonly name: ToField<String>;
  readonly symbol: ToField<String1>;
  readonly description: ToField<String>;
  readonly iconUrl: ToField<Option<Url>>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T0>],
    fields: CoinMetadataFields<T0>,
  ) {
    this.$fullTypeName = composeSuiType(
      CoinMetadata.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::coin::CoinMetadata<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.decimals = fields.decimals;
    this.name = fields.name;
    this.symbol = fields.symbol;
    this.description = fields.description;
    this.iconUrl = fields.iconUrl;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): CoinMetadataReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: CoinMetadata.$typeName,
      fullTypeName: composeSuiType(
        CoinMetadata.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V31}::coin::CoinMetadata<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T0>>,
      ],
      isPhantom: CoinMetadata.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) =>
        CoinMetadata.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        CoinMetadata.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => CoinMetadata.fromBcs(T0, data),
      bcs: CoinMetadata.bcs,
      fromJSONField: (field: any) => CoinMetadata.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => CoinMetadata.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        CoinMetadata.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        CoinMetadata.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        CoinMetadata.fetch(client, T0, id),
      new: (fields: CoinMetadataFields<ToPhantomTypeArgument<T0>>) => {
        return new CoinMetadata([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return CoinMetadata.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<CoinMetadata<ToPhantomTypeArgument<T0>>>> {
    return phantom(CoinMetadata.reified(T0));
  }
  static get p() {
    return CoinMetadata.phantom;
  }

  static get bcs() {
    return bcs.struct("CoinMetadata", {
      id: UID.bcs,
      decimals: bcs.u8(),
      name: String.bcs,
      symbol: String1.bcs,
      description: String.bcs,
      icon_url: Option.bcs(Url.bcs),
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): CoinMetadata<ToPhantomTypeArgument<T0>> {
    return CoinMetadata.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      decimals: decodeFromFields("u8", fields.decimals),
      name: decodeFromFields(String.reified(), fields.name),
      symbol: decodeFromFields(String1.reified(), fields.symbol),
      description: decodeFromFields(String.reified(), fields.description),
      iconUrl: decodeFromFields(Option.reified(Url.reified()), fields.icon_url),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): CoinMetadata<ToPhantomTypeArgument<T0>> {
    if (!isCoinMetadata(item.type)) {
      throw new Error("not a CoinMetadata type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return CoinMetadata.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      decimals: decodeFromFieldsWithTypes("u8", item.fields.decimals),
      name: decodeFromFieldsWithTypes(String.reified(), item.fields.name),
      symbol: decodeFromFieldsWithTypes(String1.reified(), item.fields.symbol),
      description: decodeFromFieldsWithTypes(
        String.reified(),
        item.fields.description,
      ),
      iconUrl: decodeFromFieldsWithTypes(
        Option.reified(Url.reified()),
        item.fields.icon_url,
      ),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): CoinMetadata<ToPhantomTypeArgument<T0>> {
    return CoinMetadata.fromFields(typeArg, CoinMetadata.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      decimals: this.decimals,
      name: this.name,
      symbol: this.symbol,
      description: this.description,
      iconUrl: fieldToJSON<Option<Url>>(
        `${Option.$typeName}<${Url.$typeName}>`,
        this.iconUrl,
      ),
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
  ): CoinMetadata<ToPhantomTypeArgument<T0>> {
    return CoinMetadata.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      decimals: decodeFromJSONField("u8", field.decimals),
      name: decodeFromJSONField(String.reified(), field.name),
      symbol: decodeFromJSONField(String1.reified(), field.symbol),
      description: decodeFromJSONField(String.reified(), field.description),
      iconUrl: decodeFromJSONField(
        Option.reified(Url.reified()),
        field.iconUrl,
      ),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): CoinMetadata<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== CoinMetadata.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(CoinMetadata.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return CoinMetadata.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): CoinMetadata<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isCoinMetadata(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a CoinMetadata object`,
      );
    }
    return CoinMetadata.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): CoinMetadata<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isCoinMetadata(data.bcs.type)
      ) {
        throw new Error(`object at is not a CoinMetadata object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = compressSuiType(gotTypeArgs[0]);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (gotTypeArg !== compressSuiType(extractType(typeArg))) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`,
        );
      }

      return CoinMetadata.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return CoinMetadata.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<CoinMetadata<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching CoinMetadata object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isCoinMetadata(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a CoinMetadata object`);
    }

    return CoinMetadata.fromSuiObjectData(typeArg, res.data);
  }
}
