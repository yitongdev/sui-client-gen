import { Option } from "../../../_dependencies/onchain/0x1/option/structs/index.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeArgument,
  ToTypeStr,
  TypeArgument,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  fieldToJSON,
  phantom,
  toBcs,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { PKG_V1 } from "../../constants.js";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isCell(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::cell::Cell` + "<");
}

export interface CellFields<T0 extends TypeArgument> {
  element: ToField<Option<T0>>;
}

export type CellReified<T0 extends TypeArgument> = Reified<
  Cell<T0>,
  CellFields<T0>
>;

/**
 * Move struct: `Cell`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::cell`
 *
 * @typeParam T0 - Type parameter 0
 */
export class Cell<T0 extends TypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::cell::Cell`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [false] as const;

  readonly $typeName = Cell.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::cell::Cell<${ToTypeStr<T0>}>`;
  readonly $typeArgs: [ToTypeStr<T0>];
  readonly $isPhantom = Cell.$isPhantom;

  readonly element: ToField<Option<T0>>;

  private constructor(typeArgs: [ToTypeStr<T0>], fields: CellFields<T0>) {
    this.$fullTypeName = composeSuiType(
      Cell.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::cell::Cell<${ToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.element = fields.element;
  }

  static reified<T0 extends Reified<TypeArgument, any>>(
    T0: T0,
  ): CellReified<ToTypeArgument<T0>> {
    return {
      typeName: Cell.$typeName,
      fullTypeName: composeSuiType(
        Cell.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V1}::cell::Cell<${ToTypeStr<ToTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [ToTypeStr<ToTypeArgument<T0>>],
      isPhantom: Cell.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) => Cell.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Cell.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => Cell.fromBcs(T0, data),
      bcs: Cell.bcs(toBcs(T0)),
      fromJSONField: (field: any) => Cell.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => Cell.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Cell.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Cell.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        Cell.fetch(client, T0, id),
      new: (fields: CellFields<ToTypeArgument<T0>>) => {
        return new Cell([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Cell.reified;
  }

  static phantom<T0 extends Reified<TypeArgument, any>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<Cell<ToTypeArgument<T0>>>> {
    return phantom(Cell.reified(T0));
  }
  static get p() {
    return Cell.phantom;
  }

  static get bcs() {
    return <T0 extends BcsType<any>>(T0: T0) =>
      bcs.struct(`Cell<${T0.name}>`, {
        element: Option.bcs(T0),
      });
  }

  static fromFields<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): Cell<ToTypeArgument<T0>> {
    return Cell.reified(typeArg).new({
      element: decodeFromFields(Option.reified(typeArg), fields.element),
    });
  }

  static fromFieldsWithTypes<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): Cell<ToTypeArgument<T0>> {
    if (!isCell(item.type)) {
      throw new Error("not a Cell type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return Cell.reified(typeArg).new({
      element: decodeFromFieldsWithTypes(
        Option.reified(typeArg),
        item.fields.element,
      ),
    });
  }

  static fromBcs<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    data: Uint8Array,
  ): Cell<ToTypeArgument<T0>> {
    return Cell.fromFields(typeArg, Cell.bcs(toBcs(typeArg)).parse(data));
  }

  toJSONField() {
    return {
      element: fieldToJSON<Option<T0>>(
        `${Option.$typeName}<${this.$typeArgs?.[0]}>`,
        this.element,
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

  static fromJSONField<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    field: any,
  ): Cell<ToTypeArgument<T0>> {
    return Cell.reified(typeArg).new({
      element: decodeFromJSONField(Option.reified(typeArg), field.element),
    });
  }

  static fromJSON<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    json: Record<string, any>,
  ): Cell<ToTypeArgument<T0>> {
    if (json.$typeName !== Cell.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Cell.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return Cell.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    content: SuiParsedData,
  ): Cell<ToTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isCell(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Cell object`,
      );
    }
    return Cell.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    data: SuiObjectData,
  ): Cell<ToTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isCell(data.bcs.type)) {
        throw new Error(`object at is not a Cell object`);
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

      return Cell.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Cell.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends Reified<TypeArgument, any>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<Cell<ToTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Cell object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isCell(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Cell object`);
    }

    return Cell.fromSuiObjectData(typeArg, res.data);
  }
}
